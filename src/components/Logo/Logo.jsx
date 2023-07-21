
export const Logo = () => {

    const logoItems = [
        {
            url: '/',
            src: 'source for img',
            alt: 'Logo'
        }
    ];

    return (
        <div>
            <a href={logoItems[0]['url']}>
                <img src={logoItems[0]['src']} alt={logoItems[0]['alt']} />
            </a>
        </div>
    )
}