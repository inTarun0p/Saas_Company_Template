"use client"
import { Check, MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "./badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/Components/Pricing/card";
import { Button } from "@/app/Components/Pricing/button";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export function Pricing() {
  return (
    <motion.div className="w-full py-20 lg:py-40">
      <motion.div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex text-center justify-center items-center gap-4 flex-col px-35"
        >
          <Badge className={"text-[#88734C]"}>Pricing</Badge>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
              Prices that make sense!
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
              Managing a small business today is already tough.
            </p>
          </div>
        </motion.div>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid pt-20 text-left grid-cols-1 lg:grid-cols-3 w-full gap-8"
        >
            <motion.div variants={item}>
              <Card className="w-full rounded-md">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">
                    Startup
                  </span>
                </CardTitle>
                <CardDescription>
                  Our goal is to streamline SMB trade, making it easier and faster
                  than ever for everyone and everywhere.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row  items-center gap-2 text-xl">
                    <span className="text-4xl">$40</span>
                    <span className="text-sm text-muted-foreground">
                      {" "}
                      / month
                    </span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-white" />
                      <div className="flex flex-col">
                        <p>Fast and reliable</p>
                        <p className="text-muted-foreground text-sm">
                          We&apos;ve made it fast and reliable.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-white" />
                      <div className="flex flex-col">
                        <p>Fast and reliable</p>
                        <p className="text-muted-foreground text-sm">
                          We&apos;ve made it fast and reliable.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-white" />
                      <div className="flex flex-col">
                        <p>Fast and reliable</p>
                        <p className="text-muted-foreground text-sm">
                          We&apos;ve made it fast and reliable.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="gap-4 text-black border-none transition-colors duration-200 hover:bg-[#88734C] hover:text-white">
                    Sign up today <MoveRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={item}>
              <Card className="w-full shadow-2xl rounded-md">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">
                    Growth
                  </span>
                </CardTitle>
                <CardDescription>
                  Our goal is to streamline SMB trade, making it easier and faster
                  than ever for everyone and everywhere.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row  items-center gap-2 text-xl">
                    <span className="text-4xl">$40</span>
                    <span className="text-sm text-muted-foreground">
                      {" "}
                      / month
                    </span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-white" />
                      <div className="flex flex-col">
                        <p>Fast and reliable</p>
                        <p className="text-muted-foreground text-sm">
                          We&apos;ve made it fast and reliable.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-white" />
                      <div className="flex flex-col">
                        <p>Fast and reliable</p>
                        <p className="text-muted-foreground text-sm">
                          We&apos;ve made it fast and reliable.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-white" />
                      <div className="flex flex-col">
                        <p>Fast and reliable</p>
                        <p className="text-muted-foreground text-sm">
                          We&apos;ve made it fast and reliable.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="default"
                    className="gap-4 text-black border-none transition-colors duration-200 hover:bg-[#88734C] hover:text-white"
                  >
                    Sign up today <MoveRight className="w-4 h-4" /> 
                  </Button>
                </div>
              </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={item}>
              <Card className="w-full rounded-md">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">
                    Enterprise
                  </span>
                </CardTitle>
                <CardDescription>
                  Our goal is to streamline SMB trade, making it easier and faster
                  than ever for everyone and everywhere.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row  items-center gap-2 text-xl">
                    <span className="text-4xl">$40</span>
                    <span className="text-sm text-muted-foreground">
                      {" "}
                      / month
                    </span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-white" />
                      <div className="flex flex-col">
                        <p>Fast and reliable</p>
                        <p className="text-muted-foreground text-sm">
                          We&apos;ve made it fast and reliable.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-white" />
                      <div className="flex flex-col">
                        <p>Fast and reliable</p>
                        <p className="text-muted-foreground text-sm">
                          We&apos;ve made it fast and reliable.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-white" />
                      <div className="flex flex-col">
                        <p>Fast and reliable</p>
                        <p className="text-muted-foreground text-sm">
                          We&apos;ve made it fast and reliable.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="gap-4 text-black border-none hover:bg-[#88734C] hover:text-white">
                    Book a meeting <PhoneCall className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
  )
}