import { teamMembers } from "@/constant/data";
import { motion } from "framer-motion";



export default function MeetOurTeam() {
    return (
        <div className=" container text-white md:py-16 text-center mb-10">
            <h2 className="md:text-5xl text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-400 mb-10 text-sm max-w-2xl mx-auto">
            At Surventix, our leadership team is made up of passionate and forward-thinking professionals committed to shaping the company’s future. With deep expertise across various industries, they work relentlessly to create meaningful solutions that drive success for our global customers.” 
            </p>
            <div className="grid md:grid-cols-3 gap-10 pt-10">
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={index}
                        className="relative w-full aspect-square cursor-pointer perspective"
                        whileHover={{ scale: 1.05 }}
                    >
                        <motion.div
                            className="w-full h-full relative"
                            initial={{ rotateY: 0 }}
                            whileHover={{ rotateY: 180 }}
                            transition={{ duration: 0.6 }}
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <div className="absolute inset-0 w-full h-full backface-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover rounded-xl shadow-lg"
                                />
                            </div>
                            <div className="absolute inset-0 w-full h-full bg-gray-800 text-white flex flex-col items-center justify-center p-4 rounded-xl shadow-lg rotate-y-180 backface-hidden">
                                <h3 className="text-xl font-semibold">{member.name}</h3>
                                <p className="text-sm text-gray-400">{member.designation}</p>
                                <p className="text-xs text-gray-300 mt-2">{member.description}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
