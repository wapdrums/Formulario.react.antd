import { Col, Form, Input, InputNumber, Row } from "antd";
import { useState } from "react";

export default function Body (){
    const [name, setName] = useState('');

    return <>
    <Form 
    layout="vertical"
    >
        <Row gutter={24}>
            <Col span={12}>
             <Form.Item 
            name ={['fullname']}
            label = "Nome completo"
            >
           <Input  placeholder ="José Amorim"/>
        </Form.Item> 
        </Col> 
        <Col span={12}>
             <Form.Item 
            name ={['email']}
            label = "E-mail"
            >
           <Input  placeholder ="joseamorim@gmail.com"/>
        </Form.Item>      
            </Col>
            <Col span={12}>
             <Form.Item 
            name ={['locale']}
            label = "Endereço"
            >
           <Input  placeholder ="Rua Abel Soares 12"/>
        </Form.Item>    
            </Col>
            <Col span={12}>
             <Form.Item 
            name ={['Bairro']}
            label = "Bairro"
            >
           <Input  placeholder ="São Miguel"/>
        </Form.Item>    
            </Col>
            
            <Col span={12}>
             <Form.Item 
            name ={['Estate']}
            label = "Estado"
            >
           <Input  placeholder ="São Paulo"/>
        </Form.Item>    
            </Col>
            <Col span={12}>
             <Form.Item 
            name ={['Cep']}
            label = "CEP"
            >
           <Input  placeholder ="08022000"/>
        </Form.Item>    
            </Col>
            <Col span={12}>
             <Form.Item 
            name ={['telefone']}
            label = "Telefone"
            >
           <Input  placeholder ="(11) 2222-2222"/>
        </Form.Item>    
            </Col>
             
            <Col span={12}>
             <Form.Item 
            name ={['celular']}
            label = "Cleular"
            >
           <Input  placeholder ="(11) 99999-9999"/>
        </Form.Item>    
            </Col>
                <Col span={12}>
                <Form.Item 
            name ={['password']}
            label = "Senha"
            >   
           
             <Input 
           type ="password"
           placeholder ="123456"
           /> 
        </Form.Item> 
            </Col>
            <Col span={12}>
                <Form.Item 
            name ={['password']}
            label = "Confirme a senha"
            >   
           
             <Input 
           type ="password"
           placeholder ="123456"
           /> 
        </Form.Item> 
            </Col>
        </Row>
    </Form>
    </>
}