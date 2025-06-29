package com.demo1;

public class CalculatorTest {

    private Calculator calculator;

    @Test
    public void testAddition() {
  
        int a = 5;
        int b = 3;
        int result = calculator.add(a, b);

        assertEquals("Addition result is incorrect", 8, result);
    }

    private void assertEquals(String string, int i, int result) {
        
        throw new UnsupportedOperationException("Unimplemented method 'assertEquals'");
    }


    @Before
    public void setUp() {
        calculator = new Calculator();
        System.out.println("Setup: Calculator instance created.");
    }

    @After
    public void tearDown() {
        calculator = null;
        System.out.println("Teardown: Calculator instance set to null.");
    }

    @Test
    public void testSubtraction() {

        int a = 5;
        int b = 3;
        int result = calculator.subtract(a, b);

        assertEquals("Subtraction result is incorrect", 2, result);
    }
}
