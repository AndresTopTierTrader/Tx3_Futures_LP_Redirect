export function SectionLayout({ children, className, bgColor, style, noPadding }) {
    return (
        <section style={style} className={`${bgColor} bg-cover bg-center`}>
            <div className={`mx-auto max-w-[1800px] px-7 md:px-[72px] ${noPadding ? '' : 'py-16 md:py-24'} ${className}`}>
                {children}
            </div>
        </section>
    )
}