package com.example.demo.model;
import java.util.List;
public class Employee {
    private int id;
    private String name;
    private List<Skill> skills;
    public Employee() {}
    public Employee(int id, String name) { this.id = id; this.name = name; }
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public List<Skill> getSkills() { return skills; }
    public void setSkills(List<Skill> skills) { this.skills = skills; }
}
