import { useState } from "react";
import { Mail, MapPin, Send, LoaderCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";
import api from "../services/api";

const initial = { name: "", email: "", phone: "", message: "", website: "" };
export default function Contact({ personal }) {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");
  const setField = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  async function submit(e) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setFeedback("");
    try {
      const { data } = await api.post("/contact", form);
      setStatus("success");
      setFeedback(data.message || "Your message was sent. Thank you!");
      setForm(initial);
    } catch (err) {
      setStatus("error");
      setFeedback(
        err.response?.data?.message ||
          "Could not send your message. Please try again later.",
      );
    }
  }

  return (
    <section id="contact" className="section container">
      <div className="contact-box">
        <SectionHeading
          eyebrow="GET IN TOUCH"
          title="Let's Work Together"
          description="Send a message about a project or an opportunity. I'll receive it directly by email."
        />
        <div className="contact-details">
          {personal.location && (
            <span>
              <MapPin size={18} />
              {personal.location}
            </span>
          )}
          {personal.email && (
            <a href={`mailto:${personal.email}`}>
              <Mail size={18} />
              {personal.email}
            </a>
          )}
        </div>
        <form className="contact-form" onSubmit={submit}>
          <div className="contact-form-row">
            <label>
              Full name *
              <input
                name="name"
                value={form.name}
                onChange={setField}
                autoComplete="name"
                maxLength={150}
                required
                placeholder="Your full name"
              />
            </label>
            <label>
              Email address *
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={setField}
                autoComplete="email"
                maxLength={255}
                required
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label>
            Phone number *
            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={setField}
              autoComplete="tel"
              maxLength={30}
              minLength={7}
              required
              placeholder="+91 98765 43210"
            />
          </label>
          <label>
            Message *
            <textarea
              name="message"
              value={form.message}
              onChange={setField}
              maxLength={5000}
              minLength={10}
              required
              rows={6}
              placeholder="Tell me about your project..."
            />
          </label>
          <div className="contact-honeypot" aria-hidden="true">
            <label>
              Leave this blank
              <input
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={setField}
              />
            </label>
          </div>
          <button
            className="btn btn-primary"
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? (
              <>
                <LoaderCircle size={18} className="spin" /> Sending...
              </>
            ) : (
              <>
                <Send size={18} /> Send Message
              </>
            )}
          </button>
          {feedback && (
            <p
              role="status"
              aria-live="polite"
              className={`form-feedback ${status}`}
            >
              {feedback}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
