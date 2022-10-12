import React from 'react';
import { Container, Icon, Advanced, Section } from './style';
import {Input, Button} from '../Generic';
import {Popover} from 'antd';



const Filter = () => {

  const onChange = () =>{
    
  }

 const advancedSearch = (
<Advanced>
  <Advanced.Title>Address</Advanced.Title>
  <Section>
    <Input onChange={onChange} placeholder={'Country'} pl={10} />
    <Input onChange={onChange} placeholder={'Region'} pl={10}/>
    <Input onChange={onChange} placeholder={'City'} pl={10}/>
    <Input onChange={onChange} placeholder={'ZipCode'} pl={10}/>
  </Section>
  <Advanced.Title>Apartment Info</Advanced.Title>
  <Section>
    <Input onChange={onChange} placeholder={'Rooms'} pl={10}/>
    <Input onChange={onChange} placeholder={'Size'} pl={10}/>
    <Input onChange={onChange} placeholder={'Sort'} pl={10}/>
  </Section>
  <Advanced.Title>Price</Advanced.Title>
  <Section>
    <Input onChange={onChange} placeholder={'Min price'} pl={10} />
    <Input onChange={onChange} placeholder={'Max price'} pl={10} />
  </Section>
</Advanced>
)


  return (
    <Container>
        <Input pl={50}
          placeholder={'Enter an address, neighborhood, city, or ZIP code'}
        >
             <Icon.Home/>
        </Input>
        <Popover placement="bottomRight" content={advancedSearch} trigger="click">
           <Button width={'131px'} type='secondary'>
               <Icon.Filter/>  Advanced
           </Button>
        </Popover>
        <Button width={'131px'} type='primary'>
            <Icon.Search/> Search
        </Button>
    </Container>
  )
}

export default Filter