"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";

export default function AdminDashboard() {
    const [submissions, setSubmissions] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        fetchSubmissions();
    }, []);

    async function fetchSubmissions() {
        try {
            const res = await fetch("/api/admin/submissions");
            if (res.ok) {
                const data = await res.json();
                setSubmissions(data.data);
            } else {
                router.push("/admin/login");
            }
        } catch (error) {
            console.error("Failed to fetch submissions");
        } finally {
            setLoading(false);
        }
    }

    async function handleLogout() {
        await fetch("/api/auth/logout", { method: "POST" });
        router.push("/admin/login");
    }

    if (loading) return <div className="p-10 text-center">Loading...</div>;

    return (
        <div className="min-h-screen bg-neutral-50 p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-primary-900">Admin Dashboard</h1>
                    <Button onClick={handleLogout} variant="outline">Logout</Button>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-neutral-50 border-b border-neutral-200">
                                <tr>
                                    <th className="p-4 font-medium text-neutral-600">Date</th>
                                    <th className="p-4 font-medium text-neutral-600">Name</th>
                                    <th className="p-4 font-medium text-neutral-600">Contact</th>
                                    <th className="p-4 font-medium text-neutral-600">Role & Interests</th>
                                    <th className="p-4 font-medium text-neutral-600">Message</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-neutral-100">
                                {submissions.map((sub) => (
                                    <tr key={sub._id} className="hover:bg-neutral-50/50 align-top">
                                        <td className="p-4 text-sm text-neutral-500 whitespace-nowrap">
                                            {new Date(sub.createdAt).toLocaleDateString()}
                                        </td>
                                        <td className="p-4 font-medium text-primary-900">
                                            {sub.name}
                                        </td>
                                        <td className="p-4 text-neutral-600 text-sm">
                                            <div className="font-medium">{sub.email}</div>
                                            <div>{sub.phone}</div>
                                            {sub.contactTime && <div className="text-xs text-neutral-400 mt-1">Pref: {sub.contactTime}</div>}
                                        </td>
                                        <td className="p-4 text-neutral-600 text-sm max-w-xs">
                                            <div className="font-medium text-primary-900 mb-1">{sub.role}</div>
                                            <div className="flex flex-wrap gap-1">
                                                {sub.interests?.map((interest, i) => (
                                                    <span key={i} className="inline-block px-2 py-0.5 bg-neutral-100 rounded-md text-xs">
                                                        {interest}
                                                    </span>
                                                ))}
                                            </div>
                                        </td>
                                        <td className="p-4 text-neutral-600 text-sm max-w-xs break-words">
                                            {sub.message}
                                        </td>
                                    </tr>
                                ))}
                                {submissions.length === 0 && (
                                    <tr>
                                        <td colSpan="5" className="p-8 text-center text-neutral-500">
                                            No submissions yet.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
