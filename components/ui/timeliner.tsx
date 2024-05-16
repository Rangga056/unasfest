import styles from "@/components/styles/timelines.module.css";
import { timelinesDatasProps } from "@/lib/types/timeline";

const Timeliner = ({ timelines }: timelinesDatasProps) => {
  return (
    <div className={`${styles.container} relative w-full`}>
      {timelines.map((timeline, index) => (
        <div
          key={index}
          className={`${styles.timeline} relative md:w-[50%] py-2.5 px-12 ${
            index % 2 === 0 ? styles.rightTimeline : styles.leftTimeline
          }`}
        >
          <div className="flex md:py-5 md:mx-10 relative">
            {index % 2 === 0 ? ( // Check if it's an even index
              <div className="flex w-full">
                <div
                  className="w-3/12 flex flex-col justify-center items-center py-5 font-bungee -space-y-1.5 text-white"
                  style={{ backgroundColor: timeline.color }}
                >
                  <h2 className="text-xs md:text-sm ">{timeline.month}</h2>
                  <h1 className="text-4xl md:text-5xl">{timeline.date}</h1>
                  <h3 className="text-xs">{timeline.year}</h3>
                </div>
                <div className="w-9/12 font-inter text-left p-4 flex flex-col justify-center items-start">
                  <h1 className="text-2xl font-bold">{timeline.title}</h1>
                  <h3 className="text-md font-semibold">
                    {timeline.description}
                  </h3>
                </div>
              </div>
            ) : (
              // If it's an odd index
              <div className="flex w-full sm:flex-row-reverse md:flex-row">
                <div className="w-9/12 font-inter text-left p-4 flex flex-col justify-center items-start">
                  <h1 className="text-2xl font-bold">{timeline.title}</h1>
                  <h3 className="text-md font-semibold">
                    {timeline.description}
                  </h3>
                </div>
                <div
                  className="w-3/12 flex flex-col justify-center items-center py-5 font-bungee -space-y-1.5 text-white"
                  style={{ backgroundColor: timeline.color }}
                >
                  <h2 className="text-xs md:text-sm ">{timeline.month}</h2>
                  <h1 className="text-4xl md:text-5xl">{timeline.date}</h1>
                  <h3 className="text-xs">{timeline.year}</h3>
                </div>
              </div>
            )}
            <span
              className={`${styles.arrow}`}
              style={{ borderBottomColor: timeline.color }}
            ></span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeliner;
