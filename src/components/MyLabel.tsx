import './mylabel.css';

export interface MyLabelProps {
    /**
     * You must write the text you want to show the label
     */
    label: string;
    /**
     * You can select size font 
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
}

export const MyLabel = ({
    label = 'No Label',
    size = 'normal',
}: MyLabelProps ) => {
    return (
        <span className={ `${ size }` }>
            { label }
        </span>
    )
}
