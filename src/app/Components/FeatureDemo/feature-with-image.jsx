import { Badge } from "./badge";

function Feature() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row gap-10 lg:items-center">
          <div className="relative w-full aspect-video h-full flex-1">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Feature showcase"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="flex gap-4 pl-0 lg:pl-20 flex-col  flex-1">
            <div>
              <Badge>Our Company</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2
                className="text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
                This is the start of something new
              </h2>
              <p
                className="text-md max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
                Our Company is an IT services firm that provides you quality services as Mobile application, UI/UX, Marketing as well as custom application development. We always believe in satisfying our customers and receive their recommendations from them. Our main goal to deliver quality and work with the help of creative services that helps in growing your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
