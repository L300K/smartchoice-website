import {AnimatedGradientText} from "@/components/magicui/animated-gradient-text";
import {Button} from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export default function Methods() {
    return (
        <div
            className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-gradient-to-r from-[#d6aaaa] to-[#eb91c2]">
            <div className="text-center">
                <h2 className="text-pretty font-bold tracking-tighter text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] text-white">
                    Smart
                    <AnimatedGradientText speed={2} colorFrom="#fff143" colorTo="#fff143">
                        Choice
                    </AnimatedGradientText>
                </h2>
                <div className="flex flex-col justify-center mt-2 md:-mt-2 space-y-4">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline">การสวมถุงยางอนามัย (condom)</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
                            <DialogHeader>
                                <DialogTitle>การสวมถุงยางอนามัย (condom)</DialogTitle>
                            </DialogHeader>
                            <DialogDescription>
                                <div className="space-y-4 text-lg">
                                    <section>
                                        <h3 className="font-bold text-lg text-black">วิธีการใช้</h3>
                                        <ol className="list-decimal pl-5 space-y-2 text-sm">
                                            <li>ตรวจสอบขนาดของถุงยางอนามัยให้ตรงกับขนาดของตน</li>
                                            <li>ตรวจสอบว่ายังไม่หมดอายุ สภาพซองไม่มีรอยชำรุดฉีกขาด</li>
                                            <li>ใส่ถุงยางอนามัยขณะที่มีการแข็งตัวเต็มที่ และสวมตลอดเวลาที่มีการสอดใส่
                                            </li>
                                            <li>ถ้าเป็นชนิดปลายมน การสวมต้องเหลือที่ตรงปลายยื่นจากปลาย 1 ซม.
                                                เพื่อรับน้ำอสุจิ
                                            </li>
                                            <li>เมื่อมีการหลั่งน้ำอสุจิต้องรีบถอนออกจากช่องคลอดก่อนจะหดตัว</li>
                                            <li>ระวังอย่าให้อสุจิหกเปรอะเปื้อนบริเวณปากช่องคลอด</li>
                                        </ol>
                                    </section>
                                    <section>
                                        <h3 className="font-bold text-lg text-blue-600">อาการข้างเคียง</h3>
                                        <div className="text-sm">การใช้ถุงยางคุมกำเนิดมีอาการข้างเคียงน้อยมาก
                                            ผลเฉพาะที่ที่พบได้คือ การระคายเคืองเฉพาะที่ อาจพบได้ถ้าการหล่อลื่นไม่เพียงพอ
                                            การแพ้ถุงยางหรือแพ้สารเคมีที่เคลือบถุงยาง
                                        </div>
                                    </section>
                                    <section>
                                        <h3 className="font-bold text-lg text-green-400">ข้อดี</h3>
                                        <ul className="list-disc pl-5 space-y-2 text-sm">
                                            <li>มีประสิทธิภาพสูงในการป้องกันหากใช้ถุงยางที่ได้มาตรฐานและถูกวิธี</li>
                                            <li>ปลอดภัยเนื่องจากถุงยางไม่มีผลต่อระบบต่าง ๆ ของร่างกาย</li>
                                            <li>ไม่มีผลทำให้การเจริญพันธุ์ลดลงเมื่อเลิกใช้</li>
                                            <li>ใช้ง่าย สะดวก หาง่าย ราคาถูก</li>
                                            <li>ป้องกันการติดเชื้อทางเพศสัมพันธ์ได้ (sexually transmitted infections:
                                                STI) รวมถึง HIV
                                            </li>
                                        </ul>
                                    </section>
                                    <section>
                                        <h3 className="font-bold text-lg text-red-600">ข้อเสีย</h3>
                                        <ul className="list-disc pl-5 space-y-2 text-sm">
                                            <li>ถ้าใช้ไม่ถูกวิธีประสิทธิภาพการคุมกำเนิดจะลดลง
                                                ถุงยางอาจแตกหรือเลื่อนหลุด
                                            </li>
                                        </ul>
                                    </section>
                                </div>
                            </DialogDescription>
                        </DialogContent>
                    </Dialog>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline">ยาเม็ดคุมกำเนิดฉุกเฉิน</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
                            <DialogHeader>
                                <DialogTitle>ยาเม็ดคุมกำเนิดฉุกเฉิน</DialogTitle>
                            </DialogHeader>
                            <DialogDescription>
                                <div className="space-y-4 text-lg">
                                    <section>
                                        <div className="text-sm">มี 2 แบบ คือ</div>
                                        <ol className="list-decimal pl-5 space-y-2 text-sm">
                                            <li>ขนาด 1.5 mg รับประทาน 1 ครั้ง หลังมีเพศสัมพันธ์ภายใน 72 ชั่วโมง</li>
                                            <li>ขนาด 0.75 mg รับประทาน 2 ครั้ง ระยะห่าง 12 ชั่วโมง เม็ดแรกควรเริ่มภายใน
                                                72 ชั่วโมงหลังมีเพศสัมพันธ์
                                            </li>
                                        </ol>
                                    </section>
                                    <section>
                                        <h3 className="font-bold text-lg text-green-400">วิธีใช้ที่ถูกต้อง</h3>
                                        <ul className="list-disc pl-5 space-y-2 text-sm">
                                            <li>กินเร็วที่สุดเท่าที่ทำได้หลังมีเพศสัมพันธ์ ยิ่งเร็วยิ่งมีประสิทธิภาพ
                                            </li>
                                            <li>ถ้าอาเจียนภายใน 2 ชั่วโมงหลังทานยา ให้กินซ้ำอีก 1 เม็ด</li>
                                            <li>หลังจากใช้ยา อาจมีเลือดออกกะปริบกะปรอย หรือรอบเดือนคลาดเคลื่อน</li>
                                        </ul>
                                    </section>
                                    <section>
                                        <h3 className="font-bold text-lg text-amber-900">ข้อควรระวัง</h3>
                                        <ul className="list-disc pl-5 space-y-2 text-sm">
                                            <li>ยิ่งกินยาช้าหลังจากมีเพศสัมพันธ์ประสิทธิภาะยิ่งลดลง</li>
                                            <li>ใช้บ่อยๆ อาจทำให้รอบเดือนแปรปรวน ไม่ควรใช้บ่อยใช้ในกรณีฉุกเฉินเท่านั้น
                                            </li>
                                            <li>ห้ามใช้แทนยาคุมกำเนิดแบบปกติ เพราะมีฮอร์โมนสูงและประสิทธิภาพต่ำกว่า</li>
                                            <li>ไม่ป้องกันโรคติดต่อทางเพศสัมพันธ์</li>
                                            <li>ถ้าประจำเดือนขาดหายไปเกิน 1 สัปดาห์หลังจากใช้ยา ควรตรวจครรภ์</li>
                                        </ul>
                                    </section>
                                </div>
                            </DialogDescription>
                        </DialogContent>
                    </Dialog>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline">ยาเม็ดคุมกำเนิดรายเดือน</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
                            <DialogHeader>
                                <DialogTitle>ยาเม็ดคุมกำเนิดรายเดือน</DialogTitle>
                            </DialogHeader>
                            <DialogDescription>
                                <div className="space-y-4 text-lg">
                                    <section>
                                        <h3 className="font-bold text-lg text-black">วิธีใช้ที่ถูกต้อง</h3>
                                        <div className="text-sm font-bold">ยาเม็ดคุมกำเนิด ชนิดฮอร์โมนรวม เอสโตรเจน +
                                            โปรเจสโตเจน
                                        </div>
                                        <div className="text-sm">โดยแนะนำให้เริ่มรับประทานเม็ดแรกขณะมีประจำเดือน 5
                                            วันแรกของรอบเดือน วันละ 1 เม็ด ทุกวันจนหมด 21เม็ด และหยุดยา 7
                                            วันจึงเริ่มรับประทานชุดใหญ่โดยไม่ต้องรอให้มีประจำเดือน แต่ถ้าชนิด 28
                                            เม็ดสามารถทานติดต่อกันได้เลย ช่วงที่เหมาะสมที่สุดคือหลังอาหารเย็น
                                            และควรทานเวลาเดียวกันทุกวันเพื่อให้ระดับฮอร์โมนคงที่
                                        </div>
                                        <div className="text-sm font-bold mt-2">ยาเม็ดคุมกำเนิด ชนิดฮอร์โมนเดี่ยว
                                            โปรเจสโตเจน
                                        </div>
                                        <div className="text-sm">ขนาดต่ำ ๆ เป็นยาคุมกำเนิดที่มี 28 เม็ด
                                            โดยรับประทานยาทุกวัน และต้องทานเวลาเดียวกัน (ลืมได้ไม่เกิน 12 ชั่วโมง)
                                        </div>
                                    </section>
                                    <section>
                                        <h3 className="font-bold text-lg text-amber-900">ข้อควรระวัง</h3>
                                        <div className="text-sm">หากลืมรับประทานยาให้รีบทานทันทีที่นึกได้
                                            แต่หากนึกได้เวลาเม็ดต่อไปให้รับประทานยา 2 เม็ด แต่หากลืมรับประทานยาทั้ง 2
                                            เม็ดให้ทานเพิ่ม 1 เม็ดหลังอาหารเช้า 2 วัน
                                        </div>
                                    </section>
                                </div>
                            </DialogDescription>
                        </DialogContent>
                    </Dialog>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline">การฝังยาคุม</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
                            <DialogHeader>
                                <DialogTitle>การฝังยาคุม</DialogTitle>
                            </DialogHeader>
                            <DialogDescription>
                                <div className="space-y-4 text-lg">
                                    <section>
                                        <h3 className="font-bold text-lg text-black">วิธีการใช้</h3>
                                        <div className="text-sm">ยาฝังคุมกำเนิด
                                            เป็นวิธีคุมกำเนิดที่ใช้โปรเจสโตเจนสังเคราะห์ฝังไว้ใต้ผิวหนังบริเวณท้องแขน มี
                                            2 ชนิด ได้แก่
                                        </div>
                                        <ol className="list-disc pl-5 space-y-2 text-sm">
                                            <li>แบบ 1 หลอด สามารถป้องกันการตั้งครรภ์ได้ 3 ปี</li>
                                            <li>แบบ 2 หลอด สามารถป้องกันได้นาน 5 ปี</li>
                                        </ol>
                                    </section>
                                    <section>
                                        <h3 className="font-bold text-lg text-amber-900">ข้อควรระวัง</h3>
                                        <ul className="list-disc pl-5 space-y-2 text-sm">
                                            <li>หลีกเลี่ยงการกดทับหรือกระแทกแรงๆ บริเวณแขนที่ฝังยา</li>
                                            <li>หากรู้สึกว่าก้านยาขยับผิดปกติ หรือมองไม่เห็นใต้ผิวหนัง ควรรีบพบแพทย์
                                            </li>
                                        </ul>
                                    </section>
                                    <section>
                                        <h3 className="font-bold text-lg text-blue-600">ผลข้างเคียง</h3>
                                        <div className="text-sm">อาจมีเลือดออกเป็นช่วง มีเลือดออกกระปริดกระปรอย หรือ
                                            ไม่มีประจำเดือนเลย มีการเปลี่ยนแปลงของน้ำหนักตัวได้
                                        </div>
                                    </section>
                                </div>
                            </DialogDescription>
                        </DialogContent>
                    </Dialog>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline">การฉีดยาคุม</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
                            <DialogHeader>
                                <DialogTitle>การฉีดยาคุม</DialogTitle>
                            </DialogHeader>
                            <DialogDescription>
                                <div className="space-y-4 text-lg">
                                    <section>
                                        <h3 className="font-bold text-lg text-black">วิธีการใช้</h3>
                                        <div className="text-sm">ยาฉีดคุมกำเนิด 1 เดือน</div>
                                        <ol className="list-disc pl-5 space-y-1 text-sm">
                                            <li>นัดฉีดทุกเดือน เดือนละ 1 ครั้ง</li>
                                            <li>ประจำเดือนจะมาตามปกติทุกเดือน</li>
                                        </ol>
                                        <div className="text-sm mt-2">ยาฉีดคุมกำเนิด 3 เดือน</div>
                                        <ol className="list-disc pl-5 space-y-1 text-sm">
                                            <li>นเป็นยาคุมชนิดฮอร์โมนเดี่ยว(ฮอร์โมนโปรเจสติน)</li>
                                            <li>นัดฉีดทุก 3 เดือน</li>
                                            <li>ประจำเดือนมากะปริดกะปรอยหรือไม่มา(แต่ไม่ได้เป็นผลเสียต่อสุขภาพ)</li>
                                        </ol>
                                    </section>
                                    <section>
                                        <h3 className="font-bold text-lg text-amber-900">ข้อควรระวัง</h3>
                                        <ul className="list-disc pl-5 space-y-2 text-sm">
                                            <li>ขณะมีประจำเดือน : เริ่มฉีดภายใน 1-5 วันของรอบเดือน</li>
                                            <li>หลังฉีดงดนวดคลึงหรือประคบร้อน เนื่องจากอาจทำให้ประสิทธิภาพของยาลดลงได้
                                            </li>
                                            <li>ควรคุมกำเนิดวิธีอื่นร่วมด้วย 7 วัน หลังจากฉีดยาคุมกำเนิด เช่น
                                                การสวมถุงยางอนามัย และควรมาฉีดยาคุมตามนัดทุกครั้ง
                                            </li>
                                        </ul>
                                    </section>
                                </div>
                            </DialogDescription>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    );
}

