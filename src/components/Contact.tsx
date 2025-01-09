import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useForm } from "react-hook-form";
import { useToast } from "./ui/use-toast";
import emailjs from "@emailjs/browser";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsSubmitting(true);

      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        message: data.message,
        to_name: "Paradise Toygers & Bengals",
        reply_to: data.email,
      };

      const response = await emailjs.send(
        "toygerparadise",
        "template_18ay98q",
        templateParams,
        "Ca9QlrTtulyXqxD1S",
      );

      if (response.status === 200) {
        toast({
          title: t("contact.success.title"),
          description: t("contact.success.description"),
          duration: 5000,
        });
        reset();
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: t("contact.error.title"),
        description: t("contact.error.description"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navigation />

      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-8 md:py-16">
          <div className="bg-white/5 rounded-lg p-4 md:p-8 backdrop-blur-sm">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              {t("contact.title")}
            </h1>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 md:space-y-6"
            >
              <div>
                <Input
                  {...register("name", { required: true })}
                  placeholder={t("contact.name")}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 w-full"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm mt-1">
                    {t("contact.errors.name")}
                  </span>
                )}
              </div>
              <div>
                <Input
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  type="email"
                  placeholder={t("contact.email")}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 w-full"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm mt-1">
                    {t("contact.errors.email")}
                  </span>
                )}
              </div>
              <div>
                <Input
                  {...register("phone", { required: true })}
                  type="tel"
                  placeholder={t("contact.phone")}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 w-full"
                />
                {errors.phone && (
                  <span className="text-red-500 text-sm mt-1">
                    {t("contact.errors.phone")}
                  </span>
                )}
              </div>
              <div>
                <Textarea
                  {...register("message", { required: true })}
                  placeholder={t("contact.message")}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[150px] md:min-h-[200px] w-full"
                />
                {errors.message && (
                  <span className="text-red-500 text-sm mt-1">
                    {t("contact.errors.message")}
                  </span>
                )}
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-6"
              >
                {isSubmitting ? t("contact.sending") : t("contact.send")}
              </Button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
