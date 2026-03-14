export default function Logo({className="h-10 w-auto"}) {
    return (
        <img
            src="/logo.png"
            alt="3Land Logo"
            className={className}
            loading="eager"
        />
    )
}