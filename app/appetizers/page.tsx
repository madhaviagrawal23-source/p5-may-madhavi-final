import { Image } from "@heroui/image";

import { title } from "@/components/primitives";
export default function Appetizers() {
  return (
    <div>
      <h1 className={title()}>Appetizers</h1>
      <ul>
        <li>Samosa</li>
        <li>Pani Puri</li>
        <li>Baby Corn Chili</li>
        <li>Vada Pao</li>
        <li>Palak Chaat</li>
        <li>Paneer Chili</li>
        <li>Allu Tikki Chaat</li>
        <li>Samosa Chaat</li>
        <li>Sev Puri Chaat</li>
      </ul>
      <div className="flex justify-between text-lg">
        <Image
          alt="samosa"
          src="https://myvegetarianroots.com/wp-content/uploads/2020/03/DSC_0218.jpeg"
          width={400}
        />
        <p>Ingredients:</p>
        <p>Recipe: Samosa</p>
      </div>
      <div className="flex justify-between text-lg">
        <Image
          alt="pani puri"
          src="https://images.food52.com/8iP_EISD5yzDr5yGIn1YjlBUSOk=/adeb0387-7f2b-4488-8ffc-fd57d60e9b53--2DAC6993-9506-4685-A875-EB8A9E575759.jpeg?w=3840&q=75"
          width={400}
        />
        <p>Ingredients:</p>
        <p>Recipe: Pani Puri</p>
      </div>
      <div className="flex justify-between text-lg">
        <Image
          alt="chili"
          src="https://www.vegrecipesofindia.com/wp-content/uploads/2021/03/chilli-baby-corn-3.jpg"
          width={400}
        />
        <p>Ingredients:</p>
        <p>Recipe: Baby-Corn Chili</p>
      </div>
    </div>
  );
}
