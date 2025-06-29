package com.example;
import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionsTest {

    @Test
    public void testAssertions() {

        assertEquals("Addition result is incorrect", 5, 2 + 3);

        assertTrue("Condition should be true", 5 > 3);

        assertFalse("Condition should be false", 5 < 3);

        assertNull("Object should be null", null);

        assertNotNull("Object should not be null", new Object());
    }
}
