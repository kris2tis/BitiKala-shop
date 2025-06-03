import { toast } from "sonner";
import { Link } from "react-router-dom";
import {Button} from "@/components/ui/button"
function useMessage() {

    const messageWithIcon = (
        title,
        icon,
        path,
        navigate = false,
        navigateText
    ) => {
        const messagetId =  toast(
            <div className="flex items-center !w-full gap-x-4 justify-between">
                <div>{icon}</div>
                <div>
                    <span>{title}</span>
                    {navigate && (
                        <p className="text-[12px] text-[#838383] mt-2">
                            {navigateText}
                            <Link className="mr-1 text-[#bbb]" to={path}>
                                کلیک کنید
                            </Link>
                        </p>
                    )}
                </div>
                <Button className="text-xs rounded-xs" onClick={() => toast.dismiss(messagetId)}>
                    بستن
                </Button>
            </div>
        );
    };

    const messageWithAction = (title ,label, action) => {
        toast(title, {
            duration:"6000",
            action: {
                label : label,
                onClick: action,
            },
        });
    }
    
    return { messageWithIcon, messageWithAction };
}

export default useMessage;
