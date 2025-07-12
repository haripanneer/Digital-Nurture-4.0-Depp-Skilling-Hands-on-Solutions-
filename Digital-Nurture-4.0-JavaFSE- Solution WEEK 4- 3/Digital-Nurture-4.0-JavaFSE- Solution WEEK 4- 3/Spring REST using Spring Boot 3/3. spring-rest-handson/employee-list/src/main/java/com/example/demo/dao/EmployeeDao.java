package com.example.demo.dao;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Repository;
import com.example.demo.model.Employee;

@Repository
public class EmployeeDao {
    private static List<Employee> EMPLOYEE_LIST;
    @Autowired
    public EmployeeDao(ApplicationContext ctx) {
        @SuppressWarnings("unchecked")
        List<Employee> list = (List<Employee>) ctx.getBean("EMPLOYEE_LIST", List.class);
        EMPLOYEE_LIST = list;
    }
    public List<Employee> getAllEmployees() {
        return EMPLOYEE_LIST;
    }
}
