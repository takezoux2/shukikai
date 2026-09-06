"use client";

import { useState } from "react";
import RolloverImage from "./RolloverImage";

interface FormData {
  name: string;
  email: string;
  confirmEmail: string;
  phone: string;
  item: string;
  targetClass: string;
  month: string;
  day: string;
  content: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  confirmEmail: "",
  phone: "",
  item: "お問い合わせ",
  targetClass: "",
  month: "",
  day: "",
  content: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [phase, setPhase] = useState<"input" | "confirm" | "complete">("input");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = "お名前を入力してください。";
    }
    if (!formData.email.trim()) {
      newErrors.email = "メールアドレスを入力してください。";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "正しいメールアドレスを入力してください。";
    }
    if (!formData.confirmEmail.trim()) {
      newErrors.confirmEmail = "確認用メールアドレスを入力してください。";
    } else if (formData.email !== formData.confirmEmail) {
      newErrors.confirmEmail = "メールアドレスが一致しません。";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "ご連絡先電話番号を入力してください。";
    }
    if (!formData.item) {
      newErrors.item = "お問い合わせ項目を選択してください。";
    }
    if (!formData.content.trim()) {
      newErrors.content = "お問合せ内容を入力してください。";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleGoConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setPhase("confirm");
      window.scrollTo({ top: 300, behavior: "smooth" });
    }
  };

  const handleBackToInput = () => {
    setPhase("input");
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPhase("complete");
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setPhase("input");
    setErrors({});
  };

  if (phase === "complete") {
    return (
      <div className="txtC p40" style={{ minHeight: 300 }}>
        <h3
          style={{
            fontSize: "160%",
            color: "#0c4aaf",
            marginBottom: 20,
          }}
        >
          お問い合わせありがとうございます
        </h3>
        <p>
          送信が完了いたしました。
          <br />
          担当者より48時間以内にご返答の連絡をさせていただきます。
        </p>
        <div className="mt30">
          <button
            type="button"
            className="button"
            onClick={handleReset}
            style={{ margin: "0 auto" }}
          >
            入力画面へ戻る
          </button>
        </div>
      </div>
    );
  }

  if (phase === "confirm") {
    return (
      <div id="mfp_phase_confirm">
        <p className="txtC" style={{ fontSize: "115%", marginBottom: 20 }}>
          内容をご確認の上、「送信する」ボタンをクリックしてください。
        </p>
        <p
          className="privacy"
          style={{
            background: "#f7f7f7",
            padding: 15,
            border: "1px solid #d6d6d6",
            marginBottom: 30,
            fontSize: "90%",
          }}
        >
          【個人情報保護に関して】
          <br />
          お客様から頂いた個人情報は、お客様とのご連絡以外には一切使用致しません。
          <br />
          当社が責任をもって安全に蓄積・保管し、法的な開示が必要な場合以外、第三者に譲渡や提供致しません。
        </p>

        <table>
          <tbody>
            <tr>
              <th scope="row">お名前</th>
              <td>{formData.name}</td>
            </tr>
            <tr>
              <th scope="row">メールアドレス</th>
              <td>{formData.email}</td>
            </tr>
            <tr>
              <th scope="row">ご連絡先電話番号</th>
              <td>{formData.phone}</td>
            </tr>
            <tr>
              <th scope="row">お問い合わせ項目</th>
              <td>{formData.item}</td>
            </tr>
            <tr>
              <th scope="row">希望クラス</th>
              <td>{formData.targetClass || "指定なし"}</td>
            </tr>
            <tr>
              <th scope="row">見学・体験希望日</th>
              <td>
                {formData.month ? `${formData.month}月` : ""}{" "}
                {formData.day ? `${formData.day}日` : ""}
                {!formData.month && !formData.day && "指定なし"}
              </td>
            </tr>
            <tr>
              <th scope="row">お問合せ内容</th>
              <td style={{ whiteSpace: "pre-wrap" }}>{formData.content}</td>
            </tr>
          </tbody>
        </table>

        <div className="mfp_buttons txtC">
          <ul className="clearfix">
            <li className="txtlink">
              <button type="button" onClick={handleBackToInput}>
                &lt;　入力ページへ戻る
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={handleSubmit}
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                }}
              >
                <RolloverImage
                  src="/img/pc/btn_submit_off.png"
                  alt="送信する"
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div id="mfp_phase_1" className="mfp_phase_section">
      <p>
        各種お問い合わせは、下記フォームよりお願いいたします。
        担当者より48時間以内に、
        <br />
        ご返答の連絡をさせていただきます。
      </p>
      <p>※土日・祝日は翌営業日</p>
      <p className="small mb60">
        ・e-mailアドレスは半角での記入となっております。
        <br />
        ・特殊文字が含まれていますと、正しく送信されていないことがありますのでご注意ください。
        <br />
        ・メールの受信制限をされていますと返信メールが届かない場合がございます。
      </p>

      <p className="small">
        <span className="txtBlue">*</span> マークの項目は必ずご入力ください。
      </p>

      <form onSubmit={handleGoConfirm}>
        <table>
          <tbody>
            <tr>
              <th scope="row">
                お名前<span className="txtBlue"> *</span>
              </th>
              <td>
                {errors.name && <div className="mfp_err">{errors.name}</div>}
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  size={20}
                  className="mfp"
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                メールアドレス<span className="txtBlue"> *</span>
              </th>
              <td>
                {errors.email && <div className="mfp_err">{errors.email}</div>}
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mfp"
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                メールアドレス<span className="small">(確認用)</span>
                <span className="txtBlue"> *</span>
              </th>
              <td>
                {errors.confirmEmail && (
                  <div className="mfp_err">{errors.confirmEmail}</div>
                )}
                <input
                  type="text"
                  name="confirmEmail"
                  value={formData.confirmEmail}
                  onChange={handleChange}
                  size={50}
                  className="mfp"
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                ご連絡先電話番号<span className="txtBlue"> *</span>
              </th>
              <td>
                {errors.phone && <div className="mfp_err">{errors.phone}</div>}
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mfp"
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                お問い合わせ項目<span className="txtBlue"> *</span>
              </th>
              <td>
                {errors.item && <div className="mfp_err">{errors.item}</div>}
                <label>
                  <input
                    type="radio"
                    name="item"
                    value="お問い合わせ"
                    checked={formData.item === "お問い合わせ"}
                    onChange={handleChange}
                  />
                  お問い合わせ
                </label>
                <label>
                  <input
                    type="radio"
                    name="item"
                    value="見学・無料体験"
                    checked={formData.item === "見学・無料体験"}
                    onChange={handleChange}
                  />
                  見学・無料体験
                </label>
              </td>
            </tr>
            <tr>
              <th scope="row">希望クラス</th>
              <td>
                <label>
                  <input
                    type="radio"
                    name="targetClass"
                    value="キッズ空手体験会"
                    checked={formData.targetClass === "キッズ空手体験会"}
                    onChange={handleChange}
                  />
                  キッズ空手体験会
                </label>
                <label>
                  <input
                    type="radio"
                    name="targetClass"
                    value="キッズ空手クラス"
                    checked={formData.targetClass === "キッズ空手クラス"}
                    onChange={handleChange}
                  />
                  キッズ空手クラス
                </label>
                <label>
                  <input
                    type="radio"
                    name="targetClass"
                    value="一般クラス"
                    checked={formData.targetClass === "一般クラス"}
                    onChange={handleChange}
                  />
                  一般クラス
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="targetClass"
                    value="レディスキック"
                    checked={formData.targetClass === "レディスキック"}
                    onChange={handleChange}
                  />
                  レディスキック
                </label>
                <label>
                  <input
                    type="radio"
                    name="targetClass"
                    value="ヨガ"
                    checked={formData.targetClass === "ヨガ"}
                    onChange={handleChange}
                  />
                  ヨガ
                </label>
                <label>
                  <input
                    type="radio"
                    name="targetClass"
                    value="健康空手クラス"
                    checked={formData.targetClass === "健康空手クラス"}
                    onChange={handleChange}
                  />
                  健康空手クラス
                </label>
              </td>
            </tr>
            <tr>
              <th scope="row">見学・体験希望日</th>
              <td className="select_area clearfix">
                <select
                  name="month"
                  className="month"
                  value={formData.month}
                  onChange={handleChange}
                >
                  <option value="">月を選択</option>
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
                <div className="fL mr15 br">月</div>
                <select
                  name="day"
                  className="day"
                  value={formData.day}
                  onChange={handleChange}
                >
                  <option value="">日を選択</option>
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
                <div className="fL">日</div>
              </td>
            </tr>
            <tr>
              <th scope="row">
                お問合せ内容<span className="txtBlue"> *</span>
              </th>
              <td>
                {errors.content && (
                  <div className="mfp_err">{errors.content}</div>
                )}
                <textarea
                  name="content"
                  rows={10}
                  value={formData.content}
                  onChange={handleChange}
                  className="mfp"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mfp_buttons txtC mt30">
          <p className="btn">
            <button
              type="submit"
              style={{
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
            >
              <RolloverImage src="/img/pc/btn_next_off.png" alt="確認画面へ" />
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}
