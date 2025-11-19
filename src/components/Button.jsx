const Button =({children, onclick}) => {
    return (<button onclick={onclick}>{children}</button>);
};

export default Button