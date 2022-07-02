import React from 'react';
import { useFormik } from 'formik';
import { Box, Button, Center, Container, Input, Stack } from '@chakra-ui/react';

/* eslint-disable no-useless-escape */

const phoneRule =
  /^((\\+[0-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validate = values => {
  const errors = {};

  if (!values.customerName) {
    errors.customerName = 'Customer Name must not be empty.';
  }
  if (!values.phone) {
    errors.phone = 'Phone must not be empty.';
  } else if (!phoneRule.test(values.phone)) {
    errors.phone = 'Please enter a valid phone number.';
  }
  return errors;
};

const FormComponent = React.memo(({ disableButton, handlePayment }) => {
  const formik = useFormik({
    initialValues: {
      customerName: '',
      phone: ''
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      handlePayment(values);
      resetForm();
    }
  });

  const showCustomerNameError =
    formik.touched.customerName && formik.errors.customerName;
  const showPhoneError = formik.touched.phone && formik.errors.phone;

  return (
    <form onSubmit={formik.handleSubmit}>
      <Container maxW={'container.sm'} pt={10}>
        <Stack spacing={3}>
          <Input
            variant="outline"
            placeholder="Customer Name"
            id="customerName"
            name="customerName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.customerName}
          />
          {showCustomerNameError ? (
            <Box color={'red'}>{formik.errors.customerName}</Box>
          ) : (
            <Box minH={'24px'}></Box>
          )}
          <Input
            variant="outline"
            placeholder="Phone"
            id="phone"
            name="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {showPhoneError ? (
            <Box color={'red'}>{formik.errors.phone}</Box>
          ) : (
            <Box minH={'24px'}></Box>
          )}
          <Center pt={10}>
            <Button
              background={'#5433FF'}
              _hover={{ background: '#4379FF' }}
              color={'white'}
              type="submit"
              width={200}
              disabled={disableButton}
            >
              Pay
            </Button>
          </Center>
        </Stack>
      </Container>
    </form>
  );
});

export default FormComponent;
