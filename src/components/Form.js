import React from 'react';
import styled from 'styled-components';
import { Label, Input, Select, Textarea } from '@rebass/forms';
import { Text, Box, Link, Flex, Button } from 'rebass/styled-components';


const Form = () => (


    <Box
        as='form'
        onSubmit={e => e.preventDefault()}
        py={3} background="primary" color="primary">
        <Flex mx={-2} mb={3}>
            <Box width={1 / 2} px={2}>
                <Label htmlFor='name'>Name</Label>
                <Input
                    id='name'
                    name='name'
                />
            </Box>
        </Flex>
        <Flex mx={-2} mb={3}>
            <Box width={1 / 2} px={2}>
                <Label htmlFor='location'>Location</Label>
                <Input
                    id='location'
                    name='location'
                    type='number'>
                </Input>
            </Box>
        </Flex>
        <Flex mx={-2} mb={3}>
            <Box width={1 / 2} px={2}>
                <Label htmlFor='name'>Phone</Label>
                <Input
                    id='phone'
                    name='phone'
                />
            </Box>
        </Flex>
        <Flex mx={-2} mb={3}>
            <Box width={1 / 2} px={2}>
                <Label htmlFor='name'>Message</Label>
                <Input
                    id='message'
                    name='message'
                    py='5'
                />
            </Box>
        </Flex>
        <Flex mx={-2} mb={3}>

            <Box width={1 / 2} px={2}  mr='auto'>
                <Button>
                    Send
                </Button>
            </Box>
        </Flex>
    </Box>

)
export default Form;