using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Pod : MonoBehaviour
{
    public enum PodState
    {
        ROTATION, // ban đầu
        SHOOT, // khi nhấn nút kéo
        REWIND // khi kéo lên
    }

    #region Serialize
    [SerializeField]
    private double _rotateSpeed = 0.5;
    [SerializeField]
    private float _speed;
    #endregion

    PodState podState = PodState.ROTATION;
    private float _angle;

    private Vector3 _origin;

    // Rod Var
    private int _score;
    private bool _isTrue;
    private Transform _Rod;
    private bool _flagRod;
    private UnityEngine.UI.Text _scoreTotal;

    void OnTriggerEnter2D(Collider2D col)
    {
        if (this._flagRod) return;
        this._flagRod = true;
        // get Data Answer
        this._Rod = col.transform;
        // set Rod move with Pod
        this._Rod.SetParent(this.transform);
        // get Data from Rod
        this._score = this._Rod.GetComponent<Rod>().score;
        this._isTrue = this._Rod.GetComponent<Rod>().isTrue;
        // set pod State to Rewind
        this.podState = PodState.REWIND;
    }

    void Awake()
    {
        _origin = transform.position;
        this._scoreTotal = Camera.main.GetComponent<UnityEngine.UI.Text>();
    }
    // Start is called before the first frame update
    void Start()
    {
        // Khởi tạo vị trí khởi đầu của cần câu
        // transform.rotation.z = Z_FISHING_ROD;
    }

    // Update is called once per frame
    void Update()
    {
        // Quay cần câu theo chu kỳ với góc từ -180 tới 0
        // z range -80 -> 80
        switch (podState)
        {
            case PodState.ROTATION:
                if (Input.GetKeyDown(KeyCode.Space))
                {
                    podState = PodState.SHOOT;
                }
                _angle += (float)_rotateSpeed;
                // quay 1 góc từ -80 đến 80
                if (_angle > 80 || _angle < -80)
                {
                    _rotateSpeed *= -1;
                }
                transform.rotation = Quaternion.AngleAxis(_angle, Vector3.forward);
                break;
            case PodState.SHOOT:
                // kiểm tra object tới đích hay chưa, tới thì chuyển về Rewind
                transform.Translate(_speed * Time.deltaTime * Vector3.down);
                if (Mathf.Abs(transform.position.x) > 5 || Mathf.Abs(transform.position.y) > 4)
                {
                    podState = PodState.REWIND;
                }
                break;
            case PodState.REWIND:
                // Kiểm tra object đã về vị trí cũ hay chưa, về thì chuyển về Rotation
                transform.Translate(_speed * Time.deltaTime * Vector3.up);
                if (Mathf.Floor(transform.position.x) == Mathf.Floor(_origin.x) && Mathf.Floor(transform.position.y) == Mathf.Floor(_origin.y))
                {
                    if (this._Rod != null) {
                        Destroy(this._Rod.gameObject);
                        this._flagRod = false;
                    }
                    transform.position = _origin;
                    podState = PodState.ROTATION;
                }
                break;
        }
    }
    private void setScore(int score) {

    }
}
