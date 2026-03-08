import Pane from "../components/Pane";

function page() {
  const services = [
    {
      title: "مسك الدفاتر",
      desc: "تنظيم السجلات المالية وتقديم تقارير دقيقة تساعد في اتخاذ قرارات استراتيجية مبنية على بيانات واضحة",
    },
    {
      title: "الزكاة والضرائب",
      desc: "إدارة التزامات الزكاة والضرائب بكفاءة عالية مع تقديم الاستشارات المتخصصة لضمان الامتثال وتقليل المخاطر",
    },
    {
      title: "المراجعة وتدقيق الحسابات",
      desc: "ضمان دقة البيانات المالية وتعزيز الثقة في تقاريرك المحاسبية وفقاً للمعايير المحلية والدولية",
    },
    {
      title: "مشاريع البيع على الخارطة",
      desc: "خدمات محاسبية ومراجعة مخصصة لمشاريع البيع على الخارطة وفق متطلبات الجهات التنظيمية",
    },
    {
      title: "الإجراءات المتفق عليها",
      desc: "تنفيذ فحوصات مالية محددة باتفاق مسبق مع العميل لتوفير نتائج دقيقة تخدم متطلباته الخاصة",
    },
    {
      title: "المحتوى المحلي",
      desc: "دعم المنشآت في احتساب وتطوير المحتوى المحلي بما يتماشى مع أهداف رؤية المملكة 2030",
    },
  ];

  return (
    <section className="bg-gray-100">
      <Pane
      className="mb-14"
        title="خدماتنا"
        details="عملكم محل اهتمامنا لذلك نقدم لكم مجموعة من الخدمات المتميزة لنساهم في تنمية أعمالكم"
      />

      <div className="max-w-7xl mx-auto xl:px-35">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="
              relative
              w-72.5
              h-72.5
              bg-[#E7E3D4]
              border-4
              border-[#6B6A55]
              rounded-[50%]
              shadow-xl/30
              flex
              items-center
              justify-center
              text-center
              p-6
              "
            >
              <div>
                <h3 className="text-xl font-bold text-[#6B6A55] mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-700 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default page;
