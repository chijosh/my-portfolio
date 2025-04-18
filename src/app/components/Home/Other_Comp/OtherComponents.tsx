import EducationSect from "./comp/Education/educationSect";
import ProfileInfo from "./comp/profileInfo";
import Testimonials from "./comp/Testimonials";

export default function OtherComponents() {
  return (
    <section>
      <div className="container mx-auto px-5 py-[80px] lg:px-20 dark:text-white">
        <ProfileInfo />
        <EducationSect />
        <Testimonials />
      </div>
    </section>
  );
}
