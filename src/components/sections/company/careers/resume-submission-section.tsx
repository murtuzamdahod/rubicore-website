"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label"; // Assuming Shadcn Label is available or will be added
import { Paperclip, Send } from "lucide-react";

export default function ResumeSubmissionSection() {
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    phone: "",
    resume: null as File | null,
    coverLetter: "",
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [fileName, setFileName] = React.useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, resume: e.target.files[0] });
      setFileName(e.target.files[0].name);
    } else {
      setFormData({ ...formData, resume: null });
      setFileName(null);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsSubmitted(false);

    if (!formData.fullName || !formData.email || !formData.resume) {
      setError("Please fill in all required fields (Full Name, Email, Resume).");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Simulate API call / form data processing
    try {
      const dataToSubmit = new FormData();
      dataToSubmit.append("fullName", formData.fullName);
      dataToSubmit.append("email", formData.email);
      dataToSubmit.append("phone", formData.phone);
      if (formData.resume) {
        dataToSubmit.append("resume", formData.resume);
      }
      dataToSubmit.append("coverLetter", formData.coverLetter);
      
      console.log("Submitting resume via form:", {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        resumeFileName: formData.resume?.name,
        coverLetterLength: formData.coverLetter.length,
      });
      // Actual API call would go here:
      // await fetch("/api/submit-resume", { method: "POST", body: dataToSubmit });

      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
      setIsSubmitted(true);
      setFormData({ fullName: "", email: "", phone: "", resume: null, coverLetter: "" });
      setFileName(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred during submission.");
    }
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 sm:py-24" id="submit-resume">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-8 sm:text-3xl">
            Submit Your Resume
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
            Interested in joining RubiCore but don't see a specific role listed? 
            Or prefer to send a general application? Use the form below.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
            <div>
              <Label htmlFor="fullName">Full Name <span className="text-ruby-600">*</span></Label>
              <Input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleChange} required className="mt-1 dark:bg-gray-600 dark:border-gray-500"/>
            </div>
            <div>
              <Label htmlFor="email">Email Address <span className="text-ruby-600">*</span></Label>
              <Input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 dark:bg-gray-600 dark:border-gray-500"/>
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="mt-1 dark:bg-gray-600 dark:border-gray-500"/>
            </div>
            <div>
              <Label htmlFor="resume">Resume/CV (PDF, DOC, DOCX) <span className="text-ruby-600">*</span></Label>
              <div className="mt-1 flex items-center justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-500 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <Paperclip className="mx-auto h-10 w-10 text-gray-400 dark:text-gray-500" />
                  <div className="flex text-sm text-gray-600 dark:text-gray-400">
                    <label
                      htmlFor="resume-upload"
                      className="relative cursor-pointer rounded-md bg-white dark:bg-gray-700 font-medium text-ruby-600 dark:text-ruby-500 hover:text-ruby-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-ruby-500"
                    >
                      <span>Upload a file</span>
                      <input id="resume-upload" name="resume" type="file" className="sr-only" onChange={handleFileChange} accept=".pdf,.doc,.docx" required />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  {fileName && <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{fileName}</p>}
                  {!fileName && <p className="text-xs text-gray-500 dark:text-gray-400">Max. 5MB</p>}
                </div>
              </div>
            </div>
            <div>
              <Label htmlFor="coverLetter">Cover Letter (Optional)</Label>
              <Textarea name="coverLetter" id="coverLetter" rows={5} value={formData.coverLetter} onChange={handleChange} className="mt-1 dark:bg-gray-600 dark:border-gray-500"/>
            </div>
            <div>
              <Button type="submit" size="lg" className="w-full">
                <Send className="w-5 h-5 mr-2"/> Submit Application
              </Button>
            </div>
          </form>
          {isSubmitted && (
            <p className="mt-6 text-center text-green-600 dark:text-green-400">
              Thank you for your application! We will review it and get back to you if there's a suitable match.
            </p>
          )}
          {error && (
            <p className="mt-6 text-center text-red-600 dark:text-red-400">
              Error: {error}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
