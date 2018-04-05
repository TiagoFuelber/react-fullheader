import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import Fullheader from '../../src/Main';

chai.use(chaiEnzyme());

describe('Fullheader Hello', () => {
    it('should have header tag when mount', () => {
        const wrapper = shallow(<Fullheader />);
        expect(wrapper.find('header')).to.have.length(1);
    });

    context('title', () => {
        it('should have h1 tag when title passed', () => {
            const wrapper = shallow(<Fullheader title="TDD" />);
            expect(wrapper.find('h1')).to.have.length(1);
        });

        it('should not have h1 tag when title not passed', () => {
            const wrapper = shallow(<Fullheader />);
            expect(wrapper.find('h1')).to.have.length(0);
        });

        it('should have h1 tag with title passed', () => {
            const wrapper = shallow(<Fullheader title="TDD" />);
            expect(wrapper.find('h1').props().children).to.be.equal('TDD');
        });
    });

    context('subtitle', () => {
        it('should have h2 tag when subtitle passed', () => {
            const wrapper = shallow(<Fullheader subtitle="Curso" />);
            expect(wrapper.find('h2')).to.have.length(1);
        });

        it('should not have h2 tag when subtitle not passed', () => {
            const wrapper = shallow(<Fullheader />);
            expect(wrapper.find('h2')).to.have.length(0);
        });

        it('should have h2 tag with subtitle passed', () => {
            const wrapper = shallow(<Fullheader subtitle="curso" />);
            expect(wrapper.find('h2').props().children).to.be.equal('curso');
        });
    });

    context('bgColor', () => {
        it('should have background #ccc when none is passed', () => {
            const wrapper = shallow(<Fullheader subtitle="Curso" />);
            expect(wrapper).to.have.style('background-color').equal('#ccc');
        });

        it('should have background-color passed', () => {
            const wrapper = shallow(<Fullheader subtitle="Curso" bgColor="#000" />);
            expect(wrapper).to.have.style('background-color').equal('#000');
        });
    });

    context('textColor', () => {
        it('should have color #fff when none is passed', () => {
            const wrapper = shallow(<Fullheader subtitle="Curso" />);
            expect(wrapper).to.have.style('color').equal('#fff');
        });

        it('should have the color passed', () => {
            const wrapper = shallow(<Fullheader subtitle="Curso" textColor="#ff0000" />);
            expect(wrapper).to.have.style('color').equal('#ff0000');
        });
    });

    context('font', () => {
        it('should have font sans-serif when none is passed', () => {
            const wrapper = shallow(<Fullheader subtitle="Curso" />);
            expect(wrapper).to.have.style('font-family').equal('sans-serif');
        });

        it('should have the font passed', () => {
            const wrapper = shallow(<Fullheader font="open-sans" />);
            expect(wrapper).to.have.style('font-family').equal('open-sans');
        });
    });

    context('bgImg', () => {
        it('should have background-image equal empty when none is passed', () => {
            const wrapper = shallow(<Fullheader />);
            expect(wrapper).to.have.style('background-image').equal('url()');
        });

        it('should have the background-image passed', () => {
            const wrapper = shallow(<Fullheader bgImg="bg.jpg" />);
            expect(wrapper).to.have.style('background-image').equal('url(bg.jpg)');
        })
    });
});
