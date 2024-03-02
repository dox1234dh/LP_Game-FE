using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Rod : MonoBehaviour
{
    [SerializeField]
    private string _answer; // đánh dấu các câu trả lời
    [SerializeField]
    public int score; // điểm số của các câu trả lời
    [SerializeField]
    public int slowDown; // cân nặng (làm chậm việc kéo về)
    [SerializeField]
    public bool isTrue;

    void Awake()
    {
        this.tag = _answer;
    }
}
