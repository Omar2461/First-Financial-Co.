import { FaEye } from "react-icons/fa";
import { GrMailOption } from "react-icons/gr";
import { FaMedal } from "react-icons/fa";
import { MdWhatsapp } from "react-icons/md";

import Button from "../Button";

function AboutUs() {
  return (
    <section className="bg-[#f4f4f4] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Side */}
          <div className="w-full lg:w-1/2 text-center lg:text-right space-y-6">
            <h2 className="text-4xl font-bold text-[#3f3f3f]">من نحن؟</h2>

            <p className="text-gray-700 leading-loose text-lg">
              نحن في شركة القوائم الأولى نقدم مجموعة شاملة من الخدمات المحاسبية
              والمالية للشركات والمؤسسات بمختلف أنواعها، حيث نركز في المقام
              الأول على مساعدة عملائنا في تحقيق تطلعاتهم وأهدافهم المالية بكفاءة
              واحترافية.
            </p>

            <p className="text-gray-700 leading-loose text-lg">
              نسعى دائماً إلى تحقيق التوازن بين الجهود المالية والإدارية بما
              يضمن استدامة النجاح. كما نحرص على بناء علاقات قائمة على الثقة
              والولاء من خلال جودة خدماتنا وتميز أدائنا.
            </p>

            {/* Button */}
            {/* <div className="pt-6">
              <Button>
                تواصل معنا
                <MdWhatsapp />
              </Button>
            </div> */}
          </div>

          {/* Cards Side */}

          <div className="flex flex-col gap-8 w-full lg:w-1/2">
            {/* Card 1 */}
            <div className="bg-[#a7a482] border-2 border-[#3f3f3f] rounded-2xl shadow-[4px_6px_0px_#3f3f3f] p-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">رؤيتنا</h3>
                <p className="text-white text-sm leading-relaxed">
                  أن نساهم في تحقيق رؤية 2030 عبر حلول مالية مبتكرة تعزز
                  الشفافية والاستدامة
                </p>
              </div>
              <div className="bg-[#8e8c6f] p-4 rounded-full">
                <FaEye className="text-white" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#a7a482] border-2 border-[#3f3f3f] rounded-2xl shadow-[4px_6px_0px_#3f3f3f] p-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">رسالتنا</h3>
                <p className="text-white text-sm leading-relaxed">
                  نقدم خدمات محاسبية احترافية تعتمد على الدقة والابتكار لبناء
                  الثقة وتحقيق النمو المستدام لعملائنا
                </p>
              </div>
              <div className="bg-[#8e8c6f] p-4 rounded-full">
                <GrMailOption className="text-white" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#a7a482] border-2 border-[#3f3f3f] rounded-2xl shadow-[4px_6px_0px_#3f3f3f] p-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">قيمنا</h3>
                <p className="text-white text-sm leading-relaxed">
                  النزاهة - الشفافية - الالتزام - الابتكار - الشراكة
                </p>
              </div>
              <div className="bg-[#8e8c6f] p-4 rounded-full">
                <FaMedal className="text-white" />
              </div>
            </div>
          </div>


 {/* Button */}
            <div>
              <Button>
                تواصل معنا
                <MdWhatsapp />
              </Button>
            </div>



        </div>
      </div>
    </section>
  );
}

export default AboutUs;
