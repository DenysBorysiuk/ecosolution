export const smoothScroll = (e: React.MouseEvent, link: string) => {
  e.preventDefault();

  const element = document.getElementById(link);
  const header = document.getElementById('header');

  if (element && header) {
    const scrollPosition = element.offsetTop + header.offsetHeight;
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth',
    });
  }
};
