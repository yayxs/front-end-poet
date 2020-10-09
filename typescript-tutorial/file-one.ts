// 美女
class Beauty {
  fullName: string;
  constructor(public firstName: string, public lastName: string) {
    this.fullName = `${firstName}${lastName}`;
  }
}
interface Person {
  firstName: string;
  lastName: string;
}
function genGirl(person: Person): string {
  return `hi ${person.firstName}${person.lastName}`;
}
const beautyGirl: Beauty = new Beauty("赵", "铁柱子");
document.body.textContent = genGirl(beautyGirl);
