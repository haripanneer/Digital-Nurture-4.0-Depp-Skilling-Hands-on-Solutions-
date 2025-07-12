package com.example.demo.service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.example.demo.dao.EmployeeDao;
import com.example.demo.model.Employee;

@Service
@Transactional
public class EmployeeService {
    @Autowired private EmployeeDao dao;
    public List<Employee> getAllEmployees() { return dao.getAllEmployees(); }
}
