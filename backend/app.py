# ✅ app.py

from flask import Flask, jsonify, request
from flask_cors import CORS
from models import db, Exam
import openai
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///exams.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

with app.app_context():
    db.create_all()

openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route('/')
def index():
    return '✅ ExamsAI Flask Backend is Live!'

@app.route('/api/exams', methods=['GET'])
def get_exams():
    exams = Exam.query.all()
    return jsonify([e.to_dict() for e in exams])

@app.route('/api/exams', methods=['POST'])
def add_exam():
    data = request.get_json()
    new_exam = Exam(name=data['name'], description=data['description'])  # Removed ID
    db.session.add(new_exam)
    db.session.commit()
    return jsonify(new_exam.to_dict()), 201

@app.route('/api/exams/<int:exam_id>', methods=['DELETE'])
def delete_exam(exam_id):
    exam = Exam.query.get(exam_id)
    if exam:
        db.session.delete(exam)
        db.session.commit()
        return jsonify({'message': f'Exam {exam_id} deleted'}), 200
    else:
        return jsonify({'error': 'Exam not found'}), 404

@app.route('/api/plan', methods=['POST'])
def generate_plan():
    data = request.get_json()
    exam = data.get("exam")
    days = data.get("days")

    prompt = f"""
    I am preparing for the {exam} exam and have {days} days left.
    Create a personalized daily study plan including subjects, revision, mocks, and tips.
    """

    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": prompt}],
            temperature=0.7,
            max_tokens=500
        )
        plan = response['choices'][0]['message']['content']
        return jsonify({"plan": plan})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
