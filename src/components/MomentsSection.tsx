import { motion } from "framer-motion";
import lifestyleDog from "@/assets/lifestyle-dog.png";
import lifestyleFamily from "@/assets/lifestyle-family.png";
import lifestyleFriends from "@/assets/lifestyle-friends.png";

const moments = [
  {
    image: lifestyleDog,
    title: "Pet Moments",
    description: "Capture your dog's tricks without fumbling for your phone.",
  },
  {
    image: lifestyleFamily,
    title: "First Steps",
    description: "Never miss a milestone. Be present while recording.",
  },
  {
    image: lifestyleFriends,
    title: "Celebrations",
    description: "Live the moment. Relive it forever.",
  },
];

const MomentsSection = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl md:text-6xl font-semibold mb-6">
            Capture <span className="text-gradient-gold">Every Moment</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Life happens fast. Don't miss it reaching for your phone.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {moments.map((moment, index) => (
            <motion.div
              key={moment.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />
                <img
                  src={moment.image}
                  alt={moment.title}
                  className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                    {moment.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {moment.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MomentsSection;
