import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sizeVariants = cva("rounded-full overflow-hidden", {
  variants: {
    size: {
      default: "h-8 w-8",
      sm: "h-6 w-6",
      large: "h-14 w-14",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

type SizeVariantProps = VariantProps<typeof sizeVariants>;

interface AvatarProps extends SizeVariantProps {
  img: string;
  alt?: string;
}

const Avatar = ({ size, img, alt }: AvatarProps) => {
  return (
    <div className={cn(sizeVariants({ size }))}>
      <img
        src={img}
        alt={alt || "profile=img"}
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
};

export default Avatar;
