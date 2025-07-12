package com.example.demo.dao;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Repository;
import com.example.demo.model.Department;

@Repository
public class DepartmentDao {
    private static List<Department> DEPT_LIST;
    @Autowired
    public DepartmentDao(ApplicationContext ctx) {
        @SuppressWarnings("unchecked")
        List<Department> list = (List<Department>) ctx.getBean("DEPARTMENT_LIST", List.class);
        DEPT_LIST = list;
    }
    public List<Department> getAllDepartments() {
        return DEPT_LIST;
    }
}
