"use client";
import { Shield, Clock, Users, Target } from 'lucide-react';
import Container from '../shared/Container';

const values = [
  { icon: <Shield />, title: "Quality", text: "Highest standards in construction" },
  { icon: <Clock />, title: "Timeliness", text: "On-time project delivery" },
  { icon: <Users />, title: "Collaboration", text: "Strong client partnerships" },
  { icon: <Target />, title: "Precision", text: "Attention to detail" }
];

export default function Values() {
  return (
    <Container className="py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((value, i) => (
          <div key={i} className="p-6 bg-white rounded-lg shadow-lg text-center mx-auto w-full max-w-sm sm:max-w-none">
            <div className="text-orange-500 mb-4 flex justify-center">{value.icon}</div>
            <h3 className="font-bold mb-2">{value.title}</h3>
            <p className="text-gray-600">{value.text}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}