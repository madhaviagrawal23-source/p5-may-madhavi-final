import { Image } from "@heroui/image";

import { title } from "@/components/primitives";
export default function DocsPage() {
  return (
    <div>
      <h1 className={title()}>Non-Indian Food</h1>
      <ul>
        <li>Tacos</li>
        <li>Loaded Nachos</li>
        <li>Grilled Cheese Sandwich</li>
      </ul>
      <div className="flex justify-between text-lg">
        <Image
          alt="tacos"
          src="https://www.connoisseurusveg.com/wp-content/uploads/2025/02/veggie-tacos-sq-2.jpg"
          width={400}
        />
        <p>Ingredients:</p>
        <p>Recipe: Tacos</p>
      </div>
      <div className="flex justify-between text-lg">
        <Image
          alt="nachos"
          src="https://www.savorynothings.com/wp-content/uploads/2016/04/loaded-vegetarian-nachos-recipe-3.jpg"
          width={400}
        />
        <p>Ingredients:</p>
        <p>Recipe: Loaded Nachos</p>
      </div>
      <div className="flex justify-between text-lg">
        <Image
          alt="cheese"
          src="https://www.jocooks.com/wp-content/uploads/2024/01/grilled-cheese-1-9.jpg"
          width={400}
        />
        <p>Ingredients:</p>
        <p>Recipe: Grilled Cheese Sandwich</p>
      </div>
    </div>
  );
}
