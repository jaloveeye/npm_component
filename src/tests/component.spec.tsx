import * as React from 'react';
import * as renderer from 'react-test-renderer';
import SampleComponent from '..';

test("component testing", () => {

    const component = renderer.create(<SampleComponent text="Herace" size={10} />);
    const testInstance = component.root;

    expect(testInstance.findByType(SampleComponent).props.text).toBe("Herace");

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test("component testing2", () => {

    const component = renderer.create(<SampleComponent text="Herace" size={10} />);
    const testInstance = component.root;

    expect(testInstance.findByType(SampleComponent).props.size).toBe(10);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});