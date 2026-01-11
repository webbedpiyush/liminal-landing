import { motion } from "framer-motion";
import lifestyleDog from "@/assets/lifestyle-dog.png";
import lifestyleFamily from "@/assets/lifestyle-family.png";
import lifestyleFriends from "@/assets/lifestyle-friends.png";

const moments = [
  {
    image: lifestyleDog,
    title: "The Trick He Finally Learned",
    description: "You were there, fully present. And so was the camera.",
  },
  {
    image: lifestyleFamily,
    title: "Her Very First Steps",
    description: "No fumbling for your phone. No missed moment. Just magic.",
  },
  {
    image: lifestyleFriends,
    title: "That Night We'll Never Forget",
    description: "Living it. Capturing it. Without choosing between them.",
  },
];

const MomentsSection = () => {
  return (
    <section className="py-32 md:py-48">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="font-body text-smoke text-sm tracking-[0.2em] uppercase mb-6">
            Life Happens Fast
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground">
            Be There. <span className="text-gradient italic">Capture It.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {moments.map((moment, index) => (
            <motion.div
              key={moment.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative aspect-[3/4] overflow-hidden rounded-lg"
            >
              {/* Image */}
              <img
                src={moment.image}
                alt={moment.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="font-display text-xl md:text-2xl text-foreground mb-2 leading-tight">
                  {moment.title}
                </h3>
                <p className="font-body text-sm text-smoke">
                  {moment.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MomentsSection;
