package com.example;

import com.example.model.Employee;
import com.example.service.EmployeeService;

import java.util.Scanner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class App implements CommandLineRunner {
    @Autowired
    private EmployeeService employeeService;

    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }

    @Override
    public void run(String... args) {
        
        Employee emp = new Employee();
        emp.setName("John Doe");
        emp.setSalary(50000);
        
        employeeService.addEmployee(emp);
        System.out.println("Employee saved successfully!");

        new Scanner(System.in).nextLine();
    }
}
