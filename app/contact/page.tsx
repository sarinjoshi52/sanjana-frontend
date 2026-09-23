import { FaUser } from "react-icons/fa";
import { FaBuilding, FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <main data-aos="fade-in" className="min-h-[450px] px-30 flex gap-5">
      <div className="flex w-1/2 flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-3xl tracking-tight">Contact Us</h1>
          <p className="text-xs text-[#64758B]">
            Get in touch with our team for advisory services, inquiries, or
            collaboration opportunities.
          </p>
        </div>
        <div className="flex flex-col rounded-lg gap-5 p-5 bg-white border border-muted">
          <div className="flex items-center gap-2">
            <FaUser className="text-primary-foreground text-lg" />
            <div className="flex flex-col items-start">
              <span className="font-bold text-sm">Contact Person</span>
              <span className="text-muted-foreground text-sm">
                Ms. Ritu Goyal
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FaBuilding className="text-primary-foreground text-lg" />
            <div className="flex flex-col items-start">
              <span className="font-bold text-sm">Institution</span>
              <span className="text-muted-foreground text-sm">
                SañJñāNā Development Pvt. Ltd.
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FaLocationDot className="text-primary-foreground text-lg" />
            <div className="flex flex-col items-start">
              <span className="font-bold text-sm">Address</span>
              <span className="text-muted-foreground text-sm">
                Devtec House, 87 Nachghar Galli, Jyatha, Kathmandu, Nepal
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <BsFillTelephoneFill className="text-primary-foreground text-lg" />
            <div className="flex flex-col items-start">
              <span className="font-bold text-sm">Telephone</span>
              <span className="text-muted-foreground text-sm">
                +977-1-4280000
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-1/2 flex-col gap-5 rounded-lg border border-muted bg-white h-fit p-10">
        <h3 className="text-lg font-bold tracking-tight">
          Subscrible to Mailing List
        </h3>
        <div className="flex flex-col gap-5">
          <p className="text-xs text-[#64758B]">
            Stay updated with our latest knowledge products, research papers,
            and event invitations.
          </p>

          <Field className="flex flex-col gap-2">
            <FieldLabel className="text-xs font-bold">Full Name</FieldLabel>
            <Input
              className="bg-transparent text-xs! rounded-sm border border-muted"
              placeholder="Your Name"
            />
          </Field>
          <Field className="flex flex-col gap-2">
            <FieldLabel className="text-xs font-bold">Email Address</FieldLabel>
            <Input
              className="bg-transparent text-xs! rounded-sm border border-muted"
              placeholder="you@organization.com"
            />
          </Field>

          <Button className="text-white font-bold w-full bg-primary rounded-sm py-5! cursor-pointer hover:bg-[#304c66]">
            Subscribe Now
          </Button>
        </div>
      </div>
    </main>
  );
}
