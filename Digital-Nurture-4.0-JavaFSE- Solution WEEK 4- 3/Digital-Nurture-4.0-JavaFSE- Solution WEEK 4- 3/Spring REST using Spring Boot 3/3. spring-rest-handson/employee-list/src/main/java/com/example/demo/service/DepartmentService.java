package com.example.demo.service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.example.demo.dao.DepartmentDao;
import com.example.demo.model.Department;

@Service
@Transactional
public class DepartmentService {
    @Autowired private DepartmentDao dao;
    public List<Department> getAllDepartments() { return dao.getAllDepartments(); }
}
