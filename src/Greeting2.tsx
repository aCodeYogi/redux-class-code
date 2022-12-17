import React, { PureComponent } from "react";
import Product from "./models/Proudct";

type Greeting2Props = {
  name: string;
};

type Greeting2State = {
  loading: boolean;
  product: Product;
};

class Greeting2 extends PureComponent<Greeting2Props, Greeting2State> {
  constructor(props: Greeting2Props) {
    super(props);

    console.log("constructor called", this.props.name);
    this.setLoading = this.setLoading.bind(this);
  }

  setLoading(loading: boolean) {
    this.setState({ loading });
  }

  // equivalent of useEffect() with empty dependency.
  componentDidMount() {
    console.log("componentDidMount called", this.props.name);
    this.mount1();
    this.mount2();
  }

  mount1() {}

  mount2() {}

  shouldComponentUpdate(
    nextProps: Readonly<Greeting2Props>,
    nextState: Readonly<{}>,
    nextContext: any
  ): boolean {
    if (nextProps.name == this.props.name) {
      return false;
    }

    return true;
  }

  componentDidUpdate(
    prevProps: Readonly<Greeting2Props>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {}

  componentWillUnmount(): void {
    
    console.log("componentWillUnmount called", this.props.name);
  }

  render(): React.ReactNode {
    const nameLength = this.props.name.length;
    console.log("render called", this.props.name);

    return (
      <>
        <h1 className="text-3xl text-indigo-700">Hello, {this.props.name}!</h1>
      </>
    );
  }
}

export default Greeting2;
