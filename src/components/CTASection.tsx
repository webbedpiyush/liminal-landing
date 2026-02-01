import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import type { ChangeEvent, FormEvent } from "react"

const CTASection = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    name: "",
    phone: "",
    website: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (status === "loading") return

    if (!formValues.email.trim()) {
      setStatus("error")
      setErrorMessage("Email is required.")
      return
    }

    setStatus("loading")
    setErrorMessage("")

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email: formValues.email.trim(),
          name: formValues.name.trim() || undefined,
          phone: formValues.phone.trim() || undefined,
          website: formValues.website,
        }),
      })

      if (!response.ok) {
        throw new Error("Request failed")
      }

      setStatus("success")
      setFormValues({ email: "", name: "", phone: "", website: "" })
    } catch {
      setStatus("error")
      setErrorMessage("Something went wrong. Please try again.")
    }
  }

  return (
    <section className="py-32 md:py-48 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-champagne/5 rounded-full blur-[150px]" />

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="font-body text-smoke text-sm tracking-[0.2em] uppercase mb-6">
            Limited First Edition
          </p>
          
          <h2 className="font-display text-5xl md:text-7xl font-light text-foreground mb-8 leading-[1.1]">
            Stop watching life through a{" "}
            <span className="text-gradient italic">screen</span>
          </h2>
          
          <p className="font-body text-lg text-smoke max-w-xl mx-auto mb-12 leading-relaxed">
            The first 1,000 pairs ship this spring. Each one hand-finished. 
            Each one a commitment to presence over performance.
          </p>

          <form
            onSubmit={handleSubmit}
            className="grid gap-4 sm:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_auto] items-center mb-10"
          >
            <label className="text-left">
              <span className="sr-only">Name</span>
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                placeholder="Name (optional)"
                autoComplete="name"
                maxLength={80}
                className="w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-smoke/70 focus:outline-none focus:ring-2 focus:ring-champagne/60"
              />
            </label>
            <label className="text-left">
              <span className="sr-only">Email</span>
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                placeholder="Email address"
                autoComplete="email"
                required
                maxLength={320}
                className="w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-smoke/70 focus:outline-none focus:ring-2 focus:ring-champagne/60"
              />
            </label>
            <label className="text-left">
              <span className="sr-only">Phone</span>
              <input
                type="tel"
                name="phone"
                value={formValues.phone}
                onChange={handleChange}
                placeholder="Phone (optional)"
                autoComplete="tel"
                inputMode="tel"
                maxLength={30}
                className="w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-smoke/70 focus:outline-none focus:ring-2 focus:ring-champagne/60"
              />
            </label>
            <input
              type="text"
              name="website"
              value={formValues.website}
              onChange={handleChange}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />
            <Button
              type="submit"
              variant="solid"
              size="xl"
              className="group w-full lg:w-auto"
              disabled={status === "loading" || status === "success"}
            >
              {status === "success" ? "You're on the list" : "Join the waitlist"}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>
          <div className="min-h-[24px] text-sm text-smoke/80" aria-live="polite">
            {status === "success" && "Thanks for joining. We'll be in touch soon."}
            {status === "error" && errorMessage}
          </div>

          <div className="flex items-center justify-center gap-12 text-center">
            <div>
              <p className="font-display text-3xl text-champagne">$99</p>
              <p className="font-body text-xs text-smoke tracking-wider mt-1">Starting price</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <p className="font-display text-3xl text-champagne">847</p>
              <p className="font-body text-xs text-smoke tracking-wider mt-1">Reserved so far</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <p className="font-display text-3xl text-champagne">Free</p>
              <p className="font-body text-xs text-smoke tracking-wider mt-1">Shipping worldwide</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
