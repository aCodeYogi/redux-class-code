import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}></Button>
);

export const primary = Template.bind({});
primary.args = {
  theme: "primary",
};

// State - Centralized register - But no body will touch it.
// Store - Clerk - parchi leke change karega state (data kaa register) ko
// Component - Salesmen

// Action - Parchi or form (2 keys vala object) -> type: sold/booking cancel,
const action1 = {
  type: "sold",
  payload: {
    flat_number: 504,
    project: "Pacific Golf state view",
    price: 8000000,
  },
};

const action2 = {
  type: "booking cancel",
  payload: { flat_number: 519, project: "Jaypee Greens", reason: "" },
};

// dispatch - Peon - Sales men kaa diya hua form/parchi, Clerk/Store tak pohchana
// Reducer - Inteligent and responsible Senior - Clerk/Store hamesh parchi leke aur register leke reducer ke paas pohochta hai aur usse hi register mein change karata hai. Change karane ke baad clerk/store vo apne paas record ke liye parchi aur change kaa hisaab kitaab rakh lega.

// select or useSelector - second peon - sales men/component ke kehne par store se data maang ke laa ke dena

// selector - parchi/form jiski help se component/sales men clerk 2 (select) ko
// batata hai usse kya data mangana hai

// components (sales men)

// data update
// create action object (parchi banayega) > dispatch (peon) > store (clerk) >
//     > reducer (senior officer) state (register), action (parchi) > store (clerk) apne paas change kaa hisaab kitaab. > select (peon 2) will inform all component that asked for that data.

// redux and react-redux library se bana banaya:
// store
// dispatch
// select or useSelector

// Kya kya banana padega:
// state kaa structure (register kaise dikhega) (type/interface)
// components (function/class)
// actions (Simple saa 2 keys vala object)
// reducer (single function)
// selectors (many function)

// many to many relation, partial objects

interface State {
  totalSold: number;
  projects: { title: string; sold: number[] };
}

// Context was also central but:
// 1. Koi hisaab nahi tha ki kis component ne kab function call kiya aur kya change kiya
// 2. multiple registers

// context
