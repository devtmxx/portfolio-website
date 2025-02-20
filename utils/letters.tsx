export const renderLetters = (name: string, key: string) => {
  return name.split("").map((letter: string, index: number) => (
    <span key={index} className={`name-animation name-animation-${key}-index inline-block opacity-0`}>{letter}</span>
  ))
}