import { PiSealWarningFill } from "react-icons/pi";

export default function AccessToSection() {
  return (
      <div className='flex flex-col items-center justify-center md:hidden'>
          <PiSealWarningFill fontSize={140} />
      <span className="text-xs">فقط در صفحه نمایش های بزرگ تر از تبلت به این بخش دسترسی دارد !</span>
    </div>
  )
}
