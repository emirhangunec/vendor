import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export default function Popup({
    isShown,
    Header,
    Body,
    Footer,
    width,
    height,
}) {
    if (isShown) {
        disableBodyScroll(document);
        return (
            <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-slate-300/50 p-4">
                <div
                    className={`flex ${height} ${width} flex-col gap-y-4 bg-white p-4`}
                >
                    {Header}
                    {Body}
                    {Footer}
                </div>
            </div>
        );
    } else {
        enableBodyScroll(document);
        return "";
    }
}
