export default function Story({ avatar, story_details }) {
    return (
        <div className="flex flex-col items-center">
            <div className="bg-gradient-to-tr from-[#e03d96] to-[#7d4c9e] aspect-square p-1 rounded-full">
                <img
                    src={avatar}
                    alt="پروفایل"
                    className="rounded-full !h-[87px] overflow-hidden border-4 border-white object-cover"
                />
            </div>

            <p className="mt-2 text-xs text-center  font-semibold text-gray-400">
                {story_details.story_name}
            </p>
        </div>
    );
}
