import { FaEye } from "react-icons/fa";
import { GrMailOption } from "react-icons/gr";
import { FaMedal } from "react-icons/fa";

import Card from "../Card";
import { MdWhatsapp } from "react-icons/md";

import Button from "../Button";

function AboutUs() {
  return (
    <section className="bg-[#f4f4f4] py-20 px-6 sm:py-30 sm:px-15 2xl:py-20">
      <div className="max-w-6xl mx-auto">

        <div className="relative flex flex-col 2xl:w-250 2xl:h-100 2xl:mr-20 sm:flex-row lg:flex-row items-center sm:items-start gap-16 ">

          <div className="w-full sm:w-70 sm:mt-10 lg:mt-20 2xl:mt-10 flex flex-col md:items-center lg:w-1/2 text-center space-y-10">
            <h2 className="text-4xl font-bold text-[#3f3f3f]">من نحن؟</h2>

            <p className="text-gray-700 sm:leading-5 lg:leading-normal text-md sm:text-lg 2xl:text-[17px]">
              نحن في شركة القوائم الأولى نقدم مجموعة شاملة من الخدمات المحاسبية
              والمالية للشركات والمؤسسات بمختلف أنواعها، حيث نركز في المقام
              الأول على مساعدة عملائنا في تحقيق تطلعاتهم وأهدافهم المالية بكفاءة
              واحترافية. نسعى دائمًا إلى تحقيق التوازن بين الجهود المالية
              والإدارية بما يضمن استدامة النجاح، كما نحرص على بناء علاقات قائمة
              على الثقة والولاء من خلال جودة خدماتنا وتميز أدائنا. نؤمن بأن
              التميز يكمن في الطريقة التي نعالج بها تحديات عملائنا، ولهذا نقدم
              حلولًا مهنية مبتكرة تختلف عن منافسينا وتحقق نتائج ملموسة تسهم في
              نمو أعمالهم بثبات.
            </p>
          </div>

          <div className="flex flex-col sm:w-80 gap-4 w-full 2xl:h-100 lg:w-1/2 border">
            <Card icon={<FaEye className="text-white" />} title="رؤيتنا">
              أن نساهم في تحقيق رؤية 2030 عبر حلول مالية مبتكرة تعزز الشفافية
              والاستدامة
            </Card>

            <Card icon={<GrMailOption className="text-white" />} title="رسالتنا">
              نقدم خدمات محاسبية احترافية تعتمد على الدقة والابتكار لبناء الثقة
              وتحقيق النمو المستدام لعملائنا
            </Card>

            <Card icon={<FaMedal className="text-white" />} title="قيمنا" className="2xl:ml-12 xl:ml-30 ">
              النزاهة - الشفافية - الالتزام - الابتكار - الشراكة
            </Card>
          </div>
           <div className="w-fit absolute -bottom-20 right-20 sm:right-60 lg:right-95 xl:right-120 2xl:right-105">
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
